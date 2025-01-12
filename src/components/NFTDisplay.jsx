import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { nfts } from "../constants";
import knightGif from "../assets/nfts/knight.gif";
import warriorGif from "../assets/nfts/warrior.gif";
import guardianGif from "../assets/nfts/guardian.gif";
import crusaderGif from "../assets/nfts/crusader.gif";
import { fadeIn } from "./design/animationVariants";
import { Tilt } from "react-tilt";

const nftGifs = {
  Knight: knightGif,
  Warrior: warriorGif,
  Guardian: guardianGif,
  Crusader: crusaderGif,
};

const preloadImages = (imagePaths) => {
  imagePaths.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};

const NFTDisplay = () => {
  const [currentNft, setCurrentNft] = useState(nfts[0]);

  useEffect(() => {
    preloadImages(Object.values(nftGifs));
  }, []);

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 mx-auto max-w-screen-lg"
      {...fadeIn}
    >
      <div className="flex-1 md:flex-1 z-10 shadow-2xl">
        <Tilt
          className="tilt min-h-[250px]"
          tiltMaxAngleX={1}
          tiltMaxAngleY={1}
          options={{ max: 5 }}
        >
          <img
            key={currentNft.title}
            src={nftGifs[currentNft.title]}
            alt={currentNft.title}
            className="w-full rounded-xl border-[1px] border-gray-800 min-w-full min-h-full"
          />
        </Tilt>
      </div>
      <div className="flex-1 p-0 md:p-6 rounded-xl">
        <h2 className="text-3xl mb-5 md:mb-6">{currentNft.title}</h2>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <p className="font-bold">
            Type: <span className="font-light">{currentNft.type}</span>
          </p>
          <p className="font-bold">
            Early Access Pass:{" "}
            <span className="font-light">
              {currentNft.earlyAccessPass ? "Yes" : "No"}
            </span>
          </p>
          <p className="font-bold">
            Event Invites:{" "}
            <span className="font-light">
              {currentNft.eventInvites ? "Yes" : "No"}
            </span>
          </p>
          <p className="font-bold">
            Revenue Sharing:{" "}
            <span className="font-light">{currentNft.revenueSharing}</span>
          </p>
          <p className="font-bold">
            Voting Rights:{" "}
            <span className="font-light">{currentNft.votingRights}</span>
          </p>
          <p className="col-span-2">{currentNft.additionalInfo}</p>
        </div>
        <p className="col-span-2 font-light font-grotesk text-gray-200 text-shadow-xl">
          XNFT's will act as an ID, or a “passport” to the X Network, and
          provide powerful utility to the holder. Most importantly, it will
          represent a claim on a share of the revenue generated by the XNode it
          is staked to.
        </p>
        <div className="flex flex-wrap justify-center gap-1 pt-6 md:pt-10 md:justify-start md:gap-2">
          {nfts.map((nft, index) => (
            <button
              key={nft.title}
              onClick={() => setCurrentNft(nfts[index])}
              className={`py-2 flex-1 px-4 md:py-1 md:px-4 font-grotesk text-xs sm:text-sm md:text-base rounded-full transition-colors transition-opacity ease-in-out duration-300 ${
                currentNft.title === nft.title
                  ? "bg-gradient-to-r from-white to-[#9eadb9] text-black border-white border rounded-full shadow-lg hover:shadow-inset hover:opacity-85"
                  : "bg-black/80 text-white border-gray-800 border-[1px] hover:opacity-90"
              }`}
            >
              {nft.title}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NFTDisplay;
