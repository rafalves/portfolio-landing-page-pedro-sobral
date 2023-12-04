<script setup lang="ts">
const phrase = ref<HTMLElement>()
const video = ref<HTMLElement>()
const divWhatsapp = ref<HTMLElement>()
const divConfirmEmail = ref<HTMLElement>()
const animatedElements: Ref<HTMLElement[]> = ref([])

const name = useRoute().query.name

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  }, {
    threshold: 0.1,
    rootMargin: '200px',
  })

  animatedElements.value.push(phrase.value!, video.value!, divWhatsapp.value!, divConfirmEmail.value!)

  animatedElements.value.forEach(el => el && observer.observe(el))
})

definePageMeta({
  middleware: 'validate-routes',
})

useHead({
  title: 'Obrigado - Pedro Sobral',
  meta: [
    { name: 'description', content: 'Conheça o método de tráfego pago que mais gerou resultados no Brasil e ganhe dinheiro fazendo anúncios online para o próprio negócio ou para o de outras pessoas.' },
    { property: 'og:title', content: 'Obrigado - Pedro Sobral' },
    { property: 'og:image', content: '/img/sobralSobre.webp' },
  ],
})
</script>

<template>
  <div class="bg-img">
    <section>
      <div class="mb-4 md:mb-24" />
      <div class="flex flex-col items-center max-w-[40em] px-4 tablet:mx-auto font-barlow gap-3">
        <div class="flex flex-col items-center">
          <p class="text-xl tablet:text-2xl text-[#0095FF] font-extrabold tracking-wide">
            DESAFIO DO
          </p>
          <p
            class="text-4xl tablet:text-5xl lg:text-[55px] font-extrabold text-center font-barlow-condensed text-slate-800"
          >
            GESTOR DE
            TRÁFEGO
          </p>
        </div>

        <div
          class="mx-auto text-xs tablet:text-base flex border rounded-full px-3 py-1 text-slate-500 my-3 w-fit gap-3"
        >
          <div>
            <Icon name="fa6-solid:chalkboard-user" color="gray" /> <span class="font-bold">18/09 a 24/09</span>
          </div>
          <div>
            <Icon name="tdesign:tv-1" color="gray" /> <span>100% online</span>
          </div>
          <div>
            <Icon name="fa6-solid:chalkboard-user" color="gray" /> <span>Curso gratuito</span>
          </div>
        </div>

        <p
          ref="phrase"
          class="scrollObserverBottom text-[22px] tablet:text-[25px] font-medium text-center mx-auto"
        >
          <span class="text-[#0095ff] font-bold">{{ name }}</span>, faltam apenas <span class="font-bold">2 passos</span> para concluir sua inscrição:
        </p>

        <iframe ref="video" class="scrollObserverBottom w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/ON8Q8bRnbnY?si=8dVJaSgsNB8MiMcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

        <div class="h-4" />

        <div ref="divWhatsapp" class="scrollObserverBottom flex border border-slate-400 w-full text-center relative rounded-xl bg-[#F3F3F3] px-[26px] md:px-[38px] py-[20px]">
          <span class="absolute md:relative -top-5 md:inset-0 left-1/2 rounded-full bg-blue-950 text-white p-[7px] px-[14.5px] md:px-[14.5px]  md:p-[7px] font-mono font-extrabold h-min">1</span>
          <div class="flex flex-col gap-3">
            <p class="text-xl md:text-[20px] text-[#2480C1] font-bold mt-2">
              ENTRE PARA O GRUPO DO WHATSAPP OFICIAL DO CURSO
            </p>
            <p class="text-[19px] font-medium">
              Será por lá que vamos te mandar os materiais de apoio das aulas e fazer nossas comunicações oficiais.
            </p>
            <NuxtLink to="/">
              <button class="btn w-full text-lg text-white font-medium py-3 rounded-full bg-green-500">
                ENTRE PARA O CANAL
              </button>
            </NuxtLink>
          </div>
        </div>

        <div class="h-4" />

        <div ref="divConfirmEmail" class="scrollObserverBottom flex border border-slate-400 w-full text-center relative rounded-xl bg-[#F3F3F3] px-[26px] md:px-[38px] py-[20px]">
          <span class="absolute md:relative -top-5 md:inset-0 left-1/2 rounded-full bg-blue-950 text-white p-[7px] px-[14.5px] md:px-[14.5px]  md:p-[7px] font-mono font-extrabold h-min">2</span>
          <div class="flex flex-col gap-3">
            <p class="text-xl md:text-[20px] text-[#2480C1] font-bold mt-2">
              VERIFIQUE O SEU E-MAIL E RESPONDA A PESQUISA
            </p>
            <p class="text-[19px] font-medium">
              Verifique o email que acabamos de mandar e responda a pesquisa.
            </p>
            <p class="text-lg font-normal">
              Será com base em suas respostas que iremos ajustar o planejamentos das aulas para atender suas necessidades de forma personalizada. Também favorite este email para evitar que nossas comunicações futuras caiam no <span class="font-semibold">SPAM.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="h-10" />
    </section>

    <footer class="bg-[#061A26] font-barlow mt-10">
      <div class="flex flex-col md:flex-row justify-between items-center tablet::max-w-[1240px] p-5 gap-5">
        <p class="text-slate-500 text-base">
          Site criado para fins de estudo.
        </p>
        <img class="w-12" src="/img/footer.jpg" alt="DGT logo">
        <p class="text-slate-100 text-base">
          Política de Privacidade
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.btn {
  background: linear-gradient(to right, #01ff66 0%, #02b148 50%, #4dfc93 100%);
  background-size: 200% auto;
  animation: gradient 5s ease infinite;
  transition: transform 0.3s ease;
  border: none;
  border-radius: 9999px;
  padding: 1rem 3rem;
  color: white;
  font-weight: bold;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.scrollObserverBottom {
  opacity: 0;
  transition: transform 1s ease;
  filter: blur(5px);
  transform: translateY(40%);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
  transition: all 1.5s ease;
}

.bg-img {
  background-image: url('./img/bg-obrigado.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
