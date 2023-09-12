import { Magic } from "magic-sdk";

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic('pk_live_00F57536379C9382', {
      network: 'mainnet'
    })
  ); // ✨
};

export const magic = createMagic();
