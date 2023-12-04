type ServerRuntimeMetaDescriptor =
  | {
      charSet: "utf-8";
    }
  | {
      title: string;
    }
  | {
      name: string;
      content: string;
    }
  | {
      property: string;
      content: string;
    }
  | {
      httpEquiv: string;
      content: string;
    }
  | {
      "script:ld+json": LdJsonObject;
    }
  | {
      tagName: "meta" | "link";
      [name: string]: string;
    }
  | {
      [name: string]: unknown;
    };
type LdJsonObject = {
  [Key in string]: LdJsonValue;
} & {
  [Key in string]?: LdJsonValue | undefined;
};
type LdJsonArray = LdJsonValue[] | readonly LdJsonValue[];
type LdJsonPrimitive = string | number | boolean | null;
type LdJsonValue = LdJsonPrimitive | LdJsonObject | LdJsonArray;

export type MetaTagsDto = ServerRuntimeMetaDescriptor[];
