import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

export default function CommentForm({ onSubmit, text, setText }: any) {
  const { user } = useUser();

  return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        name="comment-message"
        rows={2}
        className="border border-gray-300 rounded w-full block px-2 py-1"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="mt-4" id="login">
        {user ? (
          <div className="flex items-center space-x-2">
            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:scale-110">
              Send
            </button>
            <div className="flex items-center">
              <Image
                src={user.picture as string}
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <span>{user.name}</span>
            <a href="/api/auth/logout" typeof="button">
              <FiLogOut color="orangered" className="hover:scale-125" />
            </a>
          </div>
        ) : (
          <a
            className="bg-blue-600 text-white px-2 py-1 rounded hover:scale-110"
            href="/api/auth/login"
            typeof="button"
          >
            Login
          </a>
        )}
      </div>
    </form>
  );
}
