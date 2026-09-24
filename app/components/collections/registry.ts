import { AppWindow, Blocks, Gamepad2, Globe2 } from "lucide-react";
import software from "@/app/data/projects/projects.json";
import websites from "@/app/data/projects/websites.json";
import games from "@/app/data/projects/games.json";
import minecraft from "@/app/data/projects/minecraft.json";
import type { CollectionPage } from "@/app/i18n/config";

export type CollectionItem = {
    id: string;
    name: string;
    description?: unknown;
    url?: string;
    code?: string;
    images?: string[];
    stacks?: string[];
    titleImage?: { src: string; width: number; height: number };
};

type Collection = {
    items: CollectionItem[];
    Icon: typeof AppWindow;
    artworkTitle?: string;
    artworkCaption?: string;
    external?: { href: string; label: string };
};

export const collections: Record<CollectionPage, Collection> = {
    software: { items: software, Icon: AppWindow },
    websites: { items: websites, Icon: Globe2 },
    minecraft: {
        items: minecraft.map(({ image, imageWidth, imageHeight, ...mod }) => ({
            ...mod, titleImage: { src: image, width: imageWidth, height: imageHeight },
        })),
        Icon: Blocks, artworkTitle: "Minecraft", artworkCaption: "Java Edition",
    },
    games: {
        items: games, Icon: Gamepad2, artworkCaption: "PLAY / CREATE / REPEAT",
        external: { href: "https://onticentity.itch.io/", label: "Onticentity / itch.io" },
    },
};

export const collectionOrder = Object.keys(collections) as CollectionPage[];
