import Image from "next/image";

interface DataType {
    id: string;
    title: string;
    link: string;
    firstPublished: string;
    imageUrl: string;
    text: string;

    body: {
        type: "image" | "text" | "subheading";
        text?: string;
        url?: string;
        width?: number;
        height?: number;
        caption?: string | null;
        altText?: string;
    }[];

    tags: string[];
}

const FullArticle = async ({
    params,
}: {
    params: Promise<{ articleid: string }>;
}) => {
    const { articleid } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${articleid}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }

    const data = await res.json();

    const singlearticledata = data.data as DataType;

    return (
        <main className="max-w-3xl mx-auto px-4 py-8">

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                {singlearticledata.title}
            </h1>

            {/* Article Body */}
            <div>
                {singlearticledata.body.map((item, index) => {

                    // Image
                    if (item.type === "image") {
                        if (!item.url) return null;

                        return (
                            <div key={index} className="my-8">
                                <Image
                                    src={item.url}
                                    width={1200}
                                    height={1200}
                                    alt={item.altText || ""}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        );
                    }

                    // Text
                    if (item.type === "text") {
                        return (
                            <p
                                key={index}
                                className="text-[17px] leading-8 mb-6"
                            >
                                {item.text}
                            </p>
                        );
                    }

                    // Subheading
                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="text-2xl font-bold mt-10 mb-6"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    return null;
                })}
            </div>

        </main>
    );
};

export default FullArticle;