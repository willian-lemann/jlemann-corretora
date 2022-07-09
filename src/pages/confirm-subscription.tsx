import Link from "next/link";

const ConfirmSubscription = () => {
  return (
    <div className="container flex items-start justify-center  m-auto h-screen w-screen">
      <div
        id="content"
        className="bg-green-800 p-10 m-10 w-[600px] rounded-md flex flex-col"
      >
        <h3 className="text-2xl text-white">Inscrição confirmada!</h3>

        <p className="text-white m-0 mt-6 whitespace-pre-line">
          Boom!, voçê está oficialmente confirmada e na lista para receber
          informações mais informações sobre tudo do mercado imobiliario
        </p>

        <button className="self-end mt-10 text-white px-2 py-2 rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300">
          <Link href="/">Voltar para site</Link>
        </button>
      </div>
    </div>
  );
};

export default ConfirmSubscription;
