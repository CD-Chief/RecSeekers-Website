// frontend/sanity/queries.ts
import { groq } from "next-sanity";

export const TEMPLATE_STATUS_QUERY = groq`*[_type == "templateStatus"][0]{
  status,
  isReady
}`;

export const LINKED_IN_QUERY = groq`*[_type == "linkedinEmbed"][0]{
  link
}`;
