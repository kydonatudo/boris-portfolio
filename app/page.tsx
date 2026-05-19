"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CinematicMotion } from "@/components/CinematicMotion";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/lib/projects";

const AmbientScene = dynamic(
  () => import("@/components/AmbientScene").then((module) => module.AmbientScene),
  {
    ssr: false,
    loading: () => null
  }
);

const fade = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <CinematicMotion />
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 text-xs font-medium uppercase tracking-[0.22em] text-silver/70 md:px-16">
        <a href="#top">BORIS</a>
        <nav className="hidden gap-10 md:flex">
          {["Работы", "Хобби", "Процесс", "Контакты"].map((item) => (
            <a key={item} className="transition hover:text-silver" href={`#${item === "Работы" ? "works" : item === "Хобби" ? "hobby" : item === "Процесс" ? "process" : "contact"}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="bg-graphite text-silver">
        <section className="relative grid min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-16">
          <Image
            src="/assets/b1.jpg"
            alt="Кинематографичный 3D-рендер"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,.72)_34%,rgba(5,6,7,.2)_70%,#050607_100%)]" />
          <AmbientScene />
          <div className="relative z-10 grid content-end gap-8">
            <motion.div initial="hidden" animate="show" variants={fade} className="flex flex-wrap gap-5 text-xs font-medium uppercase tracking-[0.16em] text-silver/58">
              <span>3D-артист</span>
              <span>модели / окружение / текстуры</span>
            </motion.div>
            <motion.h1 initial="hidden" animate="show" variants={fade} className="max-w-[1500px] text-[21vw] font-light uppercase leading-[.78] tracking-[-.04em] md:text-[16vw]">
              BORIS
              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(231,234,238,.48)]">
                3D-АРТИСТ
              </span>
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fade} className="max-w-3xl text-2xl font-light leading-tight text-silver/78 md:ml-[42%] md:text-4xl">
              Я делаю 3D-модели для игр, видео, рекламы и визуализации: окружение, предметы, здания, персонажей и текстуры.
            </motion.p>
          </div>
        </section>

        <section className="grid gap-10 px-5 py-32 md:grid-cols-12 md:px-16 md:py-52">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xs font-medium uppercase tracking-[0.2em] text-gold md:col-span-2">
            Обо мне
          </motion.div>
          <motion.div data-cinematic variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-[28px] border border-white/10 md:col-span-3">
            <Image src="/assets/boris-lebedev.jpg" alt="Борис Лебедев" width={800} height={1000} sizes="(min-width: 768px) 25vw, 100vw" className="aspect-[4/5] object-cover" />
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-7">
            <h2 className="text-5xl font-light leading-[.98] tracking-[-.035em] md:text-8xl">
              Я люблю аккуратную 3D-работу: форму, детали, материалы и понятный результат.
            </h2>
            <div className="mt-10 grid max-w-3xl gap-6 text-lg font-light leading-relaxed text-silver/70 md:text-xl">
              <p>Меня зовут Борис Лебедев. Я 3D-артист: моделирую, скульпчу, запекаю и текстурирую объекты для игр, роликов, кино, рекламы и виртуального продакшена.</p>
              <p>У меня есть опыт работы в студии виртуального продакшена и геймдизайна. Я могу сделать аккуратную модель с понятной сеткой, материалами и финальными рендерами.</p>
              <p>Отдельно люблю Warhammer и миниатюры: собираю, крашу, дорабатываю модели и играю. Это помогает мне лучше чувствовать силуэт, фактуры и характер персонажа.</p>
            </div>
          </motion.div>
        </section>

        <section id="works" className="px-5 py-28 md:px-16">
          <div className="mb-16 grid gap-8 md:grid-cols-12">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gold md:col-span-3">Работы</div>
            <h2 className="text-5xl font-light leading-[.98] tracking-[-.035em] md:col-span-9 md:text-8xl">
              Несколько примеров того, что я делаю в 3D.
            </h2>
          </div>
          <div className="grid gap-7">
            {projects.map((project, index) => (
              <motion.article
                data-cinematic
                key={project.id}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="group grid min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[.035] p-3 md:grid-cols-12 md:p-7"
              >
                <div className={`overflow-hidden rounded-[28px] md:col-span-8 ${index % 2 ? "md:order-2" : ""}`}>
                  <Image src={project.cover} alt={project.title} width={1800} height={1100} sizes="(min-width: 768px) 66vw, 100vw" className="h-full min-h-[340px] w-full object-cover opacity-90 transition duration-1000 group-hover:scale-105 group-hover:opacity-100" />
                </div>
                <div className="self-end p-5 md:col-span-4 md:p-8">
                  <span className="mb-5 block text-xs font-medium uppercase tracking-[0.16em] text-gold">{project.category}</span>
                  <h3 className="mb-5 text-5xl font-light leading-[.96] tracking-[-.035em] md:text-7xl">{project.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-silver/66">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="hobby" className="grid gap-14 bg-charcoal px-5 py-32 md:grid-cols-12 md:px-16 md:py-52">
          <div className="md:col-span-6">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Хобби</div>
            <h2 className="mt-8 text-5xl font-light leading-[.98] tracking-[-.035em] md:text-8xl">
              Я собираю, крашу и играю миниатюрами Warhammer.
            </h2>
            <p className="mt-10 max-w-3xl text-xl font-light leading-relaxed text-silver/70">
              Это мое личное пространство для творчества. Я собираю модели, грунтую, крашу, дорабатываю детали, собираю армии и играю. В миниатюрах мне нравится ручная работа: маленький масштаб, характер персонажа и внимание к каждой детали.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-6">
            {["/assets/hobby-08.jpg", "/assets/hobby-03.jpg", "/assets/hobby-06.jpg", "/assets/hobby-09.jpg"].map((src) => (
              <Image key={src} src={src} alt="Процесс Бориса" width={1200} height={760} sizes="(min-width: 768px) 50vw, 100vw" className="rounded-[28px] border border-white/10 object-cover" />
            ))}
          </div>
        </section>

        <section id="process" className="px-5 py-32 md:px-16 md:py-52">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Процесс</div>
          <h2 className="mt-8 max-w-6xl text-5xl font-light leading-[.98] tracking-[-.035em] md:text-8xl">
            Я веду модель от первого наброска до финального рендера.
          </h2>
          <div className="mt-20 grid gap-3 md:grid-cols-6">
            {["Скульпт", "Ретопология", "Запекание", "Текстуры", "Материалы", "Рендер"].map((step, index) => (
              <motion.div key={step} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="min-h-72 rounded-[28px] border border-white/10 bg-white/[.035] p-7">
                <span className="text-xs font-medium tracking-[0.16em] text-glow">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-24 text-3xl font-light tracking-[-.025em]">{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-12 bg-graphite px-5 py-32 md:grid-cols-12 md:px-16 md:py-52">
          <div className="md:col-span-7">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Контакты</div>
            <h2 className="mt-8 text-5xl font-light leading-[.98] tracking-[-.035em] md:text-8xl">
              Если вам нужен 3D-артист, напишите мне. Обсудим задачу и сроки.
            </h2>
          </div>
          <div className="grid self-end md:col-span-4 md:col-start-9">
            {["Telegram", "ArtStation", "Instagram", "Email"].map((link) => (
              <a key={link} href={link === "Email" ? "mailto:boris@example.com" : "#"} className="flex justify-between border-b border-white/10 py-6 text-3xl font-light tracking-[-.025em] text-silver/72 transition hover:pl-4 hover:text-silver">
                {link}<span className="text-glow">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
