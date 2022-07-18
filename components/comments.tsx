import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { enUS, tr } from "date-fns/locale";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Comments({ comments }: any) {
  let { locale } = useRouter();
  const dateLocale = locale === "en" ? enUS : tr;

  return (
    <div className="mt-10 space-y-4">
      {comments.map(({ id, createdAt, text, user }: any) => {
        return (
          <div key={id} className="flex items-center space-x-2">
            <Image
              src={user.picture}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="space-x-2">
                <b>{user.name}</b>
                <time className="text-gray-400">
                  {formatDistanceToNow(createdAt, {
                    locale: dateLocale,
                  })}
                </time>
              </div>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
