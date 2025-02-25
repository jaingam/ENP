"use client"
import Link from "next/link";
import Icon from "./Icon";
import { useState } from "react";
import classNames from "classnames";

const BottomBar = () => {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isExploreActive, setIsExploreActive] = useState(false);
    const [isFavoritesActive, setIsFavoritesActive] = useState(false);
    const [isMessagesActive, setIsMessagesActive] = useState(false);
    const homeClassNames = classNames({
        "font-medium": true, "text-xs ": true,
        'text-[#777777]': !isHomeActive,
        'text-[#91D3D6]': isHomeActive,
    });
    const exploreClassNames = classNames({
        "font-medium": true, "text-xs ": true,
        'text-[#777777]': !isExploreActive,
        'text-[#91D3D6]': isExploreActive,
    });
    const favoritesClassNames = classNames({
        "font-medium": true, "text-xs ": true,
        'text-[#777777]': !isFavoritesActive,
        'text-[#91D3D6]': isFavoritesActive,
    });
    const messagesClassNames = classNames({
        "font-medium": true, "text-xs ": true,
        'text-[#777777]': !isMessagesActive,
        'text-[#91D3D6]': isMessagesActive,
    });
    return (
        <div className="appbar sticky bottom-0 w-full h-[88px] bg-white flex flex-row justify-between pl-8 pr-[23px] pt-[13px] pb-6">
            <div className="appbar-icon flex flex-col items-center">
                <div className=" h-8 w-8">
                    <Icon
                        size={8}
                        alt={"Messages"}
                        src={isHomeActive ? "https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=91D3D6" : "https://img.icons8.com/?size=32&id=i6fZC6wuprSu&format=png&color=777777"}
                    />
                </div>
                <div className={homeClassNames}>
                    Home
                </div>
            </div>
            <Link href={"/explore"}>
                <div className="appbar-icon flex flex-col items-center">
                    <div className=" h-8 w-8">
                        <Icon
                            size={8}
                            alt={"Messages"}
                            src={isExploreActive ? "https://img.icons8.com/?size=100&id=EyCyc7FoBLUu&format=png&color=91D3D6" :
                                "https://img.icons8.com/?size=32&id=aBDIThwGtLKb&format=png&color=777777"}
                        />
                    </div>
                    <div className={exploreClassNames}>
                        Explore
                    </div>
                </div>
            </Link>
            <Link href={"/favorites"} aria-disabled={true}>
                <div className="appbar-icon flex flex-col items-center">
                    <div className=" h-8 w-8 ">
                        <Icon
                            size={8}
                            alt={"Messages"}
                            src={isFavoritesActive ? "https://img.icons8.com/?size=100&id=mah7DGc4GwAU&format=png&color=91D3D6" :
                                "https://img.icons8.com/?size=32&id=qePzjQLJYgjF&format=png&color=777777"}
                        />
                    </div>
                    <div className={favoritesClassNames}>
                        Favorites
                    </div>
                </div>

            </Link>
            <Link href={"/messages"} aria-disabled={true}>
                <div className="appbar-icon flex flex-col items-center">
                    <div className=" h-8 w-8">
                        <Icon
                            size={8}
                            alt={"Messages"}
                            src={isMessagesActive ? "https://img.icons8.com/?size=100&id=VxwiJiMM7WUN&format=png&color=000000" :
                                "https://img.icons8.com/?size=32&id=ga8Uy7FrWYne&format=png&color=777777"}
                        />
                    </div>
                    <div className={messagesClassNames}>
                        Messages
                    </div>
                </div>

            </Link>
        </div>
    );
}

export default BottomBar;