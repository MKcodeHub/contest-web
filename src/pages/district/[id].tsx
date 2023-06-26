import { mapData } from "@/pages/mapData";
import { useRouter } from "next/router";
import { Layout } from "../layout";

export default function Page() {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="absolute left-8 top-8 text-6xl font-semibold">
        {mapData.find((data) => data.id === router.query.id)?.district}
      </h1>
    </Layout>
  );
}
