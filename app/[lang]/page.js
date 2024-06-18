import { getDictionary } from "../../get-dictionary";
import HomePage from "@/components/HomePage";

export default async function IndexPage({ params }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <HomePage data={dictionary.counter} />
    </div>
  );
}
