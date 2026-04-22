import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db, { auth } from "../firebase.ts";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    user: null as User | null,
    message: "",
    unsubscribeBeverages: null as (() => void) | null,
  }),

  actions: {
    async init() {
      const baseSnapshot = await getDocs(collection(db, "bases"));
      this.bases = baseSnapshot.docs.map(
        (d) => d.data() as BaseBeverageType
      );

      const syrupSnapshot = await getDocs(collection(db, "syrups"));
      this.syrups = syrupSnapshot.docs.map(
        (d) => d.data() as SyrupType
      );

      const creamerSnapshot = await getDocs(collection(db, "creamers"));
      this.creamers = creamerSnapshot.docs.map(
        (d) => d.data() as CreamerType
      );

      if (this.bases.length > 0 && this.currentBase === null) {
        this.currentBase = this.bases[0];
      }

      if (this.syrups.length > 0 && this.currentSyrup === null) {
        this.currentSyrup = this.syrups[0];
      }

      if (this.creamers.length > 0 && this.currentCreamer === null) {
        this.currentCreamer = this.creamers[0];
      }
    },

    async withGoogle() {
      this.message = "";
      const provider = new GoogleAuthProvider();

      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        this.message = "Google sign in failed.";
      }
    },

    async logout() {
      await signOut(auth);
    },

    setUser(user: User | null) {
      this.user = user;

      if (this.unsubscribeBeverages) {
        this.unsubscribeBeverages();
        this.unsubscribeBeverages = null;
      }

      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        this.message = "";
        return;
      }

      const beveragesQuery = query(
        collection(db, "beverages"),
        where("uid", "==", user.uid)
      );

      this.unsubscribeBeverages = onSnapshot(beveragesQuery, (snapshot) => {
        this.beverages = snapshot.docs.map(
          (d) => d.data() as BeverageType
        );

        if (this.beverages.length === 0) {
          this.currentBeverage = null;
          return;
        }

        if (
          this.currentBeverage &&
          this.beverages.find((b) => b.id === this.currentBeverage?.id)
        ) {
          const found = this.beverages.find(
            (b) => b.id === this.currentBeverage?.id
          );
          if (found) {
            this.showBeverage(found.id);
          }
        } else {
          this.showBeverage(this.beverages[0].id);
        }
      });
    },

    async makeBeverage() {
      if (!this.user) {
        this.message = "No user logged in, please sign in first.";
        return;
      }

      if (
        this.currentName.trim() === "" ||
        this.currentBase === null ||
        this.currentSyrup === null ||
        this.currentCreamer === null
      ) {
        this.message =
          "Please complete all beverage options and the name before making a beverage.";
        return;
      }

      const id = Date.now().toString();

      const beverage: BeverageType & { uid: string } = {
        id,
        name: this.currentName.trim(),
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
        uid: this.user.uid,
      };

      await setDoc(doc(db, "beverages", id), beverage);

      this.currentBeverage = {
        id: beverage.id,
        name: beverage.name,
        temp: beverage.temp,
        base: beverage.base,
        syrup: beverage.syrup,
        creamer: beverage.creamer,
      };

      this.message = `Beverage ${beverage.name} made successfully!`;
      this.currentName = "";
    },

    showBeverage(id: string) {
      const beverage = this.beverages.find((b) => b.id === id);

      if (!beverage) return;

      this.currentBeverage = beverage;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
    },
  },
});