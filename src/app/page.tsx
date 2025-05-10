export default function Home() {
  return (
    <div className="min-h-screen p-6 flex flex-col md:flex-row justify-center items-start gap-x-16">
      <div className="max-w-sm mt-20 bg-teal-600 p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Insira seu e-mail"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Insira sua senha"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button 
          type="submit"
          className="w-full bg--black text-white hover:bg-teal-700 p-2 border-black rounded outline">
            Entrar
          </button>
        </div>
      </div>
      <div className="max-w-sm mt-20 bg-teal-600 p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Crie sua conta
        </h1>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Insira sua senha"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button 
          type="submit"
          className="w-full bg--black text-white hover:bg-teal-700 p-2 border-black rounded outline">Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
