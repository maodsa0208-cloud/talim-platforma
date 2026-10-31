import Link from "next/link";

const bolimlar = [
  { nom: "Attestatsiya", tavsif: "O‘qituvchilar uchun attestatsiya testlari" },
  { nom: "Milliy sertifikat", tavsif: "Barcha fanlardan sertifikat testlari" },
  { nom: "DTM testlari", tavsif: "Oliy o‘quv yurtiga kirishga tayyorgarlik" },
  { nom: "Olimpiada", tavsif: "O‘quvchilar uchun olimpiada testlari" },
  { nom: "Elektron kitoblar", tavsif: "O‘qituvchi va o‘quvchilar uchun kitoblar" },
  { nom: "Videodarslar", tavsif: "Fanlar bo‘yicha video darslar" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Imtihonlarga ishonch bilan tayyorlaning
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Attestatsiya, Milliy sertifikat, DTM va olimpiada testlari, elektron
          kitoblar va videodarslar — barchasi bir joyda.
        </p>
        <Link
          href="/royxatdan-otish"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Bepul boshlash
        </Link>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bolimlar.map((b) => (
          <div
            key={b.nom}
            className="rounded-xl border border-gray-200 p-6 dark:border-gray-800"
          >
            <h2 className="text-xl font-semibold">{b.nom}</h2>
            <p className="mt-2 text-gray-500">{b.tavsif}</p>
          </div>
        ))}
      </section>
    </main>
  );
}