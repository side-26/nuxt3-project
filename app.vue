<script setup lang="ts">
const x = ref<string>('fsdfsa');
const handleShowAlert = () => {
    alert('fuck u');
};
</script>
<template>
    <main class="h-screen max-w-4/5 lg:max-w-5xl mx-auto">
        <section class="flex justify-center mb-14">
            <div class="py-5 text-slate-900">
                <section class="text-center capitalize">
                    <h1 class="text-5xl font-bold mb-6">baby name generator</h1>
                    <span class="text-sm font-normal">
                        choose your options and click the "find names" button
                        below
                    </span>
                </section>
            </div>
        </section>
        <section
            class="rounded-3xl bg-pink-300 p-10 flex justify-center items-center flex-col text-center"
        >
            <div class="my-4">
                <section class="">
                    <div class="mb-4 font-medium">1) choose a gender</div>
                    <div
                        class="rounded-3xl border-[3px] border-red-500 overflow-hidden [&_button]:capitalize [&_button]:border-red-500 [&_button]:py-2 [&_button]:px-7 [&_button]:text-xs [&_button]:font-medium w-fit bg-white"
                    >
                        <button>boys</button>
                        <button class="border-x-[3px] border-red-500">
                            unisex
                        </button>
                        <button>girls</button>
                    </div>
                </section>
            </div>
            <div class="my-4">
                <section>
                    <div class="mb-4 font-medium">
                        2) choose name's popularity
                    </div>
                    <div
                        class="rounded-3xl border-[3px] border-red-500 overflow-hidden [&_button]:capitalize [&_button]:border-red-500 [&_button]:py-3 [&_button]:px-7 [&_button]:text-xs [&_button]:font-medium w-fit bg-white"
                    >
                        <button>unique</button>
                        <button class="border-l-[3px] border-red-500">
                            trendy
                        </button>
                    </div>
                </section>
            </div>
            <div class="my-4">
                <section>
                    <div class="mb-4 font-medium">3) choose name's length</div>
                    <div
                        class="rounded-3xl border-[3px] border-red-500 overflow-hidden [&_button]:capitalize [&_button]:border-red-500 [&_button]:py-3 [&_button]:px-7 [&_button]:text-xs [&_button]:font-medium w-fit bg-white"
                    >
                        <button>long</button>
                        <button class="border-x-[3px] border-red-500">
                            all
                        </button>
                        <button>short</button>
                    </div>
                </section>
            </div>
            <div class="mt-8">
                <button
                    class="bg-red-500 py-2 px-14 text-white rounded-3xl text-sm"
                >
                    Find names
                </button>
            </div>
        </section>
    </main>
</template>
