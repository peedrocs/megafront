export default function NotFound() {
  return (
    <div className={`
      text-center
    `}>
      <h1 className="h-1/2 text-white font-extrabold text-7xl">Erro 404!</h1>
      <p className="h-1/2 text-white text-2xl font-semibold">Esta página que o usuário tentou acessar não existe!</p>
    </div>
  );
}