// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          📷🍽️ Food Photography Login
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-400 text-black font-bold py-2 px-4 rounded hover:bg-teal-300 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-teal-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
