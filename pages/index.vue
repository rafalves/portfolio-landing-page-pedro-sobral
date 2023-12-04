<script setup lang="ts">
const divForm = ref<HTMLElement>()
const img1 = ref<HTMLElement>()
const img2 = ref<HTMLElement>()
const col1 = ref<HTMLElement>()
const cta0 = ref<HTMLElement>()
const cta1 = ref<HTMLElement>()
const cta2 = ref<HTMLElement>()
const cta3 = ref<HTMLElement>()
const elements1: Ref<HTMLElement[]> = ref([])
const elements2: Ref<HTMLElement[]> = ref([])

onMounted(() => {
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  }, {
    threshold: 0.1,
    // root: document.querySelector("#inscricao"),
  })
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  }, {
    threshold: 1,
  })

  elements1.value.push(divForm.value!, img1.value!, img2.value!, col1.value!)
  elements1.value.forEach(el => el && observer1.observe(el))
  elements2.value.push(cta0.value!, cta1.value!, cta2.value!, cta3.value!)
  elements2.value.forEach(el => el && observer2.observe(el))
})

async function onSubmit({ name, email }: { name: string, email: string }) {
  await navigateTo({
    path: '/obrigado',
    query: {
      name,
      email,
    },
  })
}

function validateEmail(value: unknown): string | boolean {
  if (!value)
    return 'Email obrigatório'

  // if the field is not a valid email
  if (typeof value === 'string') {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!regex.test(value))
      return 'Digite um email válido'
  }
  return true
}

function validateName(value: unknown): string | boolean {
  if (typeof value === 'string')
    return value.trim() !== '' ? true : 'Nome obrigatório'

  return 'Nome obrigatório'
}

useHead({
  title: 'Pedro Sobral - O desafio do gestor de tráfego',
  meta: [
    { name: 'description', content: 'Conheça o método de tráfego pago que mais gerou resultados no Brasil e ganhe dinheiro fazendo anúncios online para o próprio negócio ou para o de outras pessoas.' },
  ],
})
</script>

<template>
  <div class="font-barlow overflow-hidden">
    <section>
      <div
        class="justify-center border-b-2 border-[#BDBDBD] pt-[50px] shadow-[0px_8px_1px_rgba(221,_221,_221,_1),_0_8px_20px_rgba(204,_204,_204,_1)] "
      >
        <div id="inscricao" class="flex flex-col lg:flex-row lg:max-w-[1240px] w-full mx-auto relative ">
          <div ref="divForm" class="scrollObserverTop flex flex-col place-self-center lg:w-[35%] mb-12 mx-5 lg-mx-0">
            <div class="flex flex-col items-center ">
              <p class="text-xl tablet:text-2xl text-[#0095FF] font-barlow font-extrabold tracking-wide">
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
              class="text-xs tablet:text-base flex place-self-center lg:justify-between border rounded-full px-3 py-1 text-slate-500 my-3 w-fit gap-3"
            >
              <div>
                <Icon name="fa6-solid:chalkboard-user" color="gray" /> <span>Curso gratuito</span>
              </div>
              <div>
                <Icon name="tdesign:tv-1" color="gray" /> <span>100% online</span>
              </div>
              <div>
                <Icon name="fa6-solid:chalkboard-user" color="gray" /> <span class="font-bold">18/09 a 24/09</span>
              </div>
            </div>

            <p class="text-xl tablet:text-[27px] leading-snug ">
              Conheça o <span class="font-bold">método de tráfego
                pago</span>
              que
              mais gerou
              resultados
              no Brasil e <span class="text-[#0095FF] mt-[19px] font-bold">ganhe dinheiro fazendo anúncios online</span>
              para o
              próprio
              negócio ou para
              o de outras pessoas.
            </p>
            <p class="text-sm tablet:text-base text-gray-500 mt-[19px] leading-snug">
              Um curso gratuito e ao vivo de
              cinco
              dias para pessoas que
              desejam
              alavancar
              negócios
              através dos anúncios
              online.
            </p>

            <Form @submit="onSubmit">
              <p class="mt-[19px]  leading-snug font-medium">
                Deixe o seu e-mail abaixo para participar:
              </p>

              <div class="relative mt-3">
                <Field
                  class="border border-slate-300 rounded-full w-full p-3 text-slate-500 mt-[10px] focus:outline-slate-300"
                  name="name" type="text" placeholder="Seu primeiro nome" :rules="validateName"
                />

                <ErrorMessage class="text-xs tablet:text-base absolute -top-3 ml-3 text-red-400" name="name" as="p" />
              </div>

              <div class="relative mt-3">
                <Field
                  class="border border-slate-300 rounded-full w-full p-3 text-slate-500 mt-[10px] focus:outline-slate-300"
                  name="email" type="email" placeholder="E-mail" :rules="validateEmail"
                />

                <ErrorMessage class="text-xs tablet:text-base absolute -top-3 ml-3 text-red-400" name="email" as="p" />
              </div>

              <button
                class="btn mt-[22px] rounded-full bg-[#0095FF] p-3 text-center w-full text-white font-bold transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-[#2480C1]"
              >
                FAZER
                MEU
                CADASTRO
              </button>
            </Form>

            <p class="text-[11px] text-gray-400 mt-[19px]">
              Prometemos não usar nenhuma informação de contato para enviar
              qualquer tipo de
              SPAM. Os dados
              coletados são
              tratados nos termos da Lei Geral de Proteção de Dados e você pode se descadastrar da nossa lista a
              qualquer
              momento. Para mais informações, acesse nossa Política de Privacidade.
            </p>
          </div>

          <div ref="img1" class="scrollObserverRight  flex flex-col justify-end">
            <img class="w-full h-auto object-cover" src="/img/fundoSobralB.webp" alt="Foto de Rodrigo Sobral">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col-reverse items-center lg:flex-row max-w-[1240px] w-full mx-auto relative lg:mt-20">
        <div ref="img2" class="scrollObserverLeft tablet:w-1/2 px-3">
          <img class="w-full h-auto object-cover" src="/img/sobralSobre.webp" alt="Foto de Rodrigo Sobral">
        </div>
        <div
          ref="col1"
          class="scrollObserverRight flex flex-col tablet:items-center font-barlow px-10 mt-10 lg:mt-0  lg:w-1/2 text-justify w-full"
        >
          <p class="text-xl lg:text-3xl font-extrabold lg:tracking-wide font-barlow text-slate-800">
            QUEM
            SERÁ O
            SEU
            PROFESSOR?
          </p>
          <p class="text-lg lg:text-2xl  text-slate-500 lg:mt-4 font-extrabold">
            Pedro Sobral é o maior
            professor de
            anúncios
            online do
            Brasil.
          </p>
          <p class="text-gray-500 mt-[19px] leading-7">
            Ao long ode 08 anos na profissão, <span
              class="text-slate-700 font-bold"
            >ele foi responsável por
              propagar a gestão de tráfego no país,</span> desenvolver o mercado e posicionar o Brasil como referência
            mundial em
            anúncios online. No total, Pedro já treinou mais de 50 mil pessoas, gerenciou mais de <span
              class="text-slate-700 font-bold"
            >R$300 milhões em aúncios
              online</span> e possui quase 40 min alunos na comunidade Sobral de Tráfego - e agora <span
              class="text-slate-700 font-bold"
            >vai te ensinar
              exatamente como
              usar a gestão de tráfego para enriquecer,</span> seja anunciando para o próprio negócio ou para o negócio de
            outras
            pessoas.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-center gradient  w-full pb-[80px]">
        <div class="flex flex-col items-center mt-[77px] max-w-[520px]">
          <p
            ref="cta0"
            class="scrollObserverIn text-xl tablet:text-3xl text-[#0095FF] font-extrabold tracking-[4px] font-barlow-condensed"
          >
            DESAFIO
            DO
          </p>
          <p
            ref="cta1"
            class="scrollObserverIn text-center text-[40px] tablet:text-[55px] font-extrabold -mt-3 font-barlow-condensed text-white"
          >
            GESTOR DE
            TRÁFEGO
          </p>

          <div
            ref="cta2"
            class="scrollObserverBottom flex justify-between border rounded-full px-3 py-1 text-white my-3 w-full"
          >
            <div>
              <Icon name="fa6-solid:chalkboard-user" color="#2279B7" /> <span>Curso gratuito</span>
            </div>
            <div>
              <Icon name="tdesign:tv-1" color="#2279B7" /> <span>100% online</span>
            </div>
            <div>
              <Icon name="fa6-solid:chalkboard-user" color="#2279B7" /> <span class="font-bold">18/09 a 24/09</span>
            </div>
          </div>

          <NuxtLink class="w-full" to="#inscricao">
            <button
              ref="cta3"
              class="scrollObserverBottom btn mt-[22px] rounded-full  p-3 text-center w-full text-white font-bold  hover:scale-125"
            >
              QUERO
              GARANTIR O MEU LUGAR
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <footer class="bg-[#061A26] font-barlow">
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
.scrollObserverTop {
  opacity: 0;
  transition: all 2s;
  filter: blur(5px);
  transform: translateY(-30%);
}

.scrollObserverRight {
  opacity: 0;
  transition: all 1.5s;
  filter: blur(5px);
  transform: translateX(50%);
}

.scrollObserverLeft {
  opacity: 0;
  transition: all 1.5s;
  filter: blur(5px);
  transform: translateX(-90%);
}

.scrollObserverBottom {
  opacity: 0;
  transition: transform 1s ease;
  filter: blur(5px);
  transform: translateY(40%);
}

.scrollObserverIn {
  opacity: 1;
  filter: blur(5px);
  transform: scale(0.5);
  transition: transform 1s 1.5s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
  transform: translateX(0);
  transform: scale(1);
  transition: all 1.5s ease;
}

.gradient {
  background: rgb(33, 79, 107);
  background: radial-gradient(circle, rgba(33, 79, 107, 1) 50%, rgba(11, 36, 52, 1) 100%);
}

.btn {
  background: linear-gradient(to right, #0095ff 0%, #006bb8 50%, #70c3ff 100%);
  background-size: 200% auto;
  animation: gradient 5s ease infinite;
  transition: transform 0.3s ease;
  border: none;
  border-radius: 9999px;
  padding: 1rem 3rem;
  color: white;
  font-weight: bold;
}

.btn:hover {
  transform: scale(1.1);
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
</style>
