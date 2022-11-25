import clsx from "clsx";
import { Colors } from "~/application/enums/shared/Colors";

export function getColors(main?: boolean) {
  if (main) {
    return [
      Colors.GRAY,
      Colors.RED,
      Colors.ORANGE,
      Colors.YELLOW,
      Colors.GREEN,
      Colors.TEAL,
      Colors.CYAN,
      Colors.SKY,
      Colors.BLUE,
      Colors.INDIGO,
      Colors.VIOLET,
      Colors.PURPLE,
      Colors.FUCHSIA,
      Colors.PINK,
      Colors.ROSE,
    ];
  }
  return [
    Colors.SLATE,
    Colors.GRAY,
    Colors.NEUTRAL,
    Colors.STONE,
    Colors.RED,
    Colors.ORANGE,
    Colors.AMBER,
    Colors.YELLOW,
    Colors.LIME,
    Colors.GREEN,
    Colors.EMERALD,
    Colors.TEAL,
    Colors.CYAN,
    Colors.SKY,
    Colors.BLUE,
    Colors.INDIGO,
    Colors.VIOLET,
    Colors.PURPLE,
    Colors.FUCHSIA,
    Colors.PINK,
    Colors.ROSE,
  ];
}

export function getTailwindColor(itemColor: Colors): string {
  switch (itemColor) {
    case Colors.UNDEFINED:
      return "text-gray-500";
    case Colors.SLATE:
      return "text-slate-500";
    case Colors.GRAY:
      return "text-gray-500";
    case Colors.NEUTRAL:
      return "text-neutral-500";
    case Colors.STONE:
      return "text-stone-500";
    case Colors.RED:
      return "text-red-500";
    case Colors.ORANGE:
      return "text-orange-500";
    case Colors.AMBER:
      return "text-amber-500";
    case Colors.YELLOW:
      return "text-yellow-500";
    case Colors.LIME:
      return "text-lime-500";
    case Colors.GREEN:
      return "text-green-500";
    case Colors.EMERALD:
      return "text-emerald-500";
    case Colors.TEAL:
      return "text-teal-500";
    case Colors.CYAN:
      return "text-cyan-500";
    case Colors.SKY:
      return "text-sky-500";
    case Colors.BLUE:
      return "text-blue-500";
    case Colors.INDIGO:
      return "text-indigo-500";
    case Colors.VIOLET:
      return "text-violet-500";
    case Colors.PURPLE:
      return "text-purple-500";
    case Colors.FUCHSIA:
      return "text-fuchsia-500";
    case Colors.PINK:
      return "text-pink-500";
    case Colors.ROSE:
      return "text-rose-500";
    default:
      return "";
  }
}

// export const colors = [
//   {
//     name: "GRAY",
//     id: 3,
//   },
//   {
//     name: "SLATE",
//     id: 1,
//   },
//   {
//     name: "RED",
//     id: 6,
//   },
//   {
//     name: "ORANGE",
//     id: 7,
//   },
//   {
//     name: "AMBER",
//     id: 8,
//   },
//   {
//     name: "YELLOW",
//     id: 9,
//   },
//   {
//     name: "LIME",
//     id: 10,
//   },
//   {
//     name: "GREEN",
//     id: 11,
//   },
//   {
//     name: "EMERALD",
//     id: 12,
//   },
//   {
//     name: "TEAL",
//     id: 13,
//   },
//   {
//     name: "CYAN",
//     id: 14,
//   },
//   {
//     name: "SKY",
//     id: 15,
//   },
//   {
//     name: "BLUE",
//     id: 16,
//   },
//   {
//     name: "INDIGO",
//     id: 17,
//   },
//   {
//     name: "VIOLET",
//     id: 18,
//   },
//   {
//     name: "PURPLE",
//     id: 19,
//   },
//   {
//     name: "PINK",
//     id: 20,
//   },
//   {
//     name: "ROSE",
//     id: 21,
//   },
// ];

export function getBadgeColor(itemColor: Colors, strong?: boolean): string {
  switch (itemColor) {
    case Colors.UNDEFINED:
      return clsx("bg-gray-50 border border-gray-200 text-gray-600", strong && "bg-gray-400 border-gray-900 text-gray-900");
    case Colors.SLATE:
      return clsx("bg-slate-50 border border-slate-200 text-slate-600", strong && "bg-slate-400 border-slate-900 text-slate-900");
    case Colors.GRAY:
      return clsx("bg-gray-50 border border-gray-200 text-gray-600", strong && "bg-gray-400 border-gray-900 text-gray-900");
    case Colors.NEUTRAL:
      return clsx("bg-neutral-50 border border-neutral-200 text-neutral-600", strong && "bg-neutral-400 border-neutral-900 text-neutral-900");
    case Colors.STONE:
      return clsx("bg-stone-50 border border-stone-200 text-stone-600", strong && "bg-stone-400 border-stone-900 text-stone-900");
    case Colors.RED:
      return clsx("bg-red-50 border border-red-200 text-red-600", strong && "bg-red-400 border-red-900 text-red-900");
    case Colors.ORANGE:
      return clsx("bg-orange-50 border border-orange-200 text-orange-600", strong && "bg-orange-400 border-orange-900 text-orange-900");
    case Colors.AMBER:
      return clsx("bg-amber-50 border border-amber-200 text-amber-600", strong && "bg-amber-400 border-amber-900 text-amber-900");
    case Colors.YELLOW:
      return clsx("bg-yellow-50 border border-yellow-200 text-yellow-600", strong && "bg-yellow-400 border-yellow-900 text-yellow-900");
    case Colors.LIME:
      return clsx("bg-lime-50 border border-lime-200 text-lime-600", strong && "bg-lime-400 border-lime-900 text-lime-900");
    case Colors.GREEN:
      return clsx("bg-green-50 border border-green-200 text-green-600", strong && "bg-green-400 border-green-900 text-green-900");
    case Colors.EMERALD:
      return clsx("bg-emerald-50 border border-emerald-200 text-emerald-600", strong && "bg-emerald-400 border-emerald-900 text-emerald-900");
    case Colors.TEAL:
      return clsx("bg-teal-50 border border-teal-200 text-teal-600", strong && "bg-teal-400 border-teal-900 text-teal-900");
    case Colors.CYAN:
      return clsx("bg-cyan-50 border border-cyan-200 text-cyan-600", strong && "bg-cyan-400 border-cyan-900 text-cyan-900");
    case Colors.SKY:
      return clsx("bg-sky-50 border border-sky-200 text-sky-600", strong && "bg-sky-400 border-sky-900 text-sky-900");
    case Colors.BLUE:
      return clsx("bg-blue-50 border border-blue-200 text-blue-600", strong && "bg-blue-400 border-blue-900 text-blue-900");
    case Colors.INDIGO:
      return clsx("bg-indigo-50 border border-indigo-200 text-indigo-600", strong && "bg-indigo-400 border-indigo-900 text-indigo-900");
    case Colors.VIOLET:
      return clsx("bg-violet-50 border border-violet-200 text-violet-600", strong && "bg-violet-400 border-violet-900 text-violet-900");
    case Colors.PURPLE:
      return clsx("bg-purple-50 border border-purple-200 text-purple-600", strong && "bg-purple-400 border-purple-900 text-purple-900");
    case Colors.FUCHSIA:
      return clsx("bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-600", strong && "bg-fuchsia-400 border-fuchsia-900 text-fuchsia-900");
    case Colors.PINK:
      return clsx("bg-pink-50 border border-pink-200 text-pink-600", strong && "bg-pink-400 border-pink-900 text-pink-900");
    case Colors.ROSE:
      return clsx("bg-rose-50 border border-rose-200 text-rose-600", strong && "bg-rose-400 border-rose-900 text-rose-900");
  }
  return "";
}

export function getBackgroundColor(itemColor: Colors): string {
  switch (itemColor) {
    case Colors.UNDEFINED:
      return "bg-gray-500";
    case Colors.SLATE:
      return "bg-slate-500";
    case Colors.GRAY:
      return "bg-gray-500";
    case Colors.NEUTRAL:
      return "bg-neutral-500";
    case Colors.STONE:
      return "bg-stone-500";
    case Colors.RED:
      return "bg-red-500";
    case Colors.ORANGE:
      return "bg-orange-500";
    case Colors.AMBER:
      return "bg-amber-500";
    case Colors.YELLOW:
      return "bg-yellow-500";
    case Colors.LIME:
      return "bg-lime-500";
    case Colors.GREEN:
      return "bg-green-500";
    case Colors.EMERALD:
      return "bg-emerald-500";
    case Colors.TEAL:
      return "bg-teal-500";
    case Colors.CYAN:
      return "bg-cyan-500";
    case Colors.SKY:
      return "bg-sky-500";
    case Colors.BLUE:
      return "bg-blue-500";
    case Colors.INDIGO:
      return "bg-indigo-500";
    case Colors.VIOLET:
      return "bg-violet-500";
    case Colors.PURPLE:
      return "bg-purple-500";
    case Colors.FUCHSIA:
      return "bg-fuchsia-500";
    case Colors.PINK:
      return "bg-pink-500";
    case Colors.ROSE:
      return "bg-rose-500";
  }
  return "";
}
