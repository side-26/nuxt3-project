<script setup lang="ts">
import { IBabyName, IButtonEvent, IBabiesName } from '@/config/types';
import { BabySex, NameLength, NameType } from '@/config/enums';
import { names } from '@/config/data';

const babyName = reactive<IBabyName>({
    sex: BabySex.BOY,
    type: NameType.TRENDY,
    length: NameLength.ALL,
});
// set a interface for event
const babiesName = ref<IBabiesName[]>([]);
const handleChooseSex = (event: IButtonEvent) => {
    const innerText = event?.target?.innerText.toLowerCase();
    switch (innerText) {
        case 'boys':
            babyName.sex = BabySex.BOY;
            break;
        case 'girls':
            babyName.sex = BabySex.GIRL;
            break;
        default:
            babyName.sex = BabySex.UNISEX;
            break;
    }
};
const handleChooseType = (event: IButtonEvent) => {
    const innerText = event?.target?.innerText.toLowerCase();
    switch (innerText) {
        case 'trendy':
            babyName.type = NameType.TRENDY;
            break;
        default:
            babyName.type = NameType.UNIQUE;
            break;
    }
};
const handleChooseLength = (event: IButtonEvent) => {
    const innerText = event?.target?.innerText.toLowerCase();
    switch (innerText) {
        case 'all':
            babyName.length = NameLength.ALL;
            break;
        case 'short':
            babyName.length = NameLength.SHORT;
            break;
        default:
            babyName.length = NameLength.LONG;
            break;
    }
};
const showBabyName = () => {
    babiesName.value = [...names]
        .filter(({ gender }) => gender === babyName.sex)
        .filter(({ length }) => {
            if (babyName.length === NameLength.ALL) return true;
            else return length === babyName.length;
        })
        .filter(({ popularity }) => popularity === babyName.type);
};
const removeName = (babyId: number) => {
    babiesName.value = babiesName.value.filter(({ id }) => id !== babyId);
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
                        <button
                            @click="handleChooseSex"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.sex === BabySex.BOY,
                            }"
                        >
                            boys
                        </button>
                        <button
                            @click="handleChooseSex"
                            class="border-x-[3px] border-red-500"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.sex === BabySex.UNISEX,
                            }"
                        >
                            unisex
                        </button>
                        <button
                            @click="handleChooseSex"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.sex === BabySex.GIRL,
                            }"
                        >
                            girls
                        </button>
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
                        <button
                            @click="handleChooseType"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.type === 'unique',
                            }"
                        >
                            unique
                        </button>
                        <button
                            @click="handleChooseType"
                            class="border-l-[3px] border-red-500"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.type === 'trendy',
                            }"
                        >
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
                        <button
                            @click="handleChooseLength"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.length === 'long',
                            }"
                        >
                            long
                        </button>
                        <button
                            @click="handleChooseLength"
                            class="border-x-[3px] border-red-500"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.length === 'all',
                            }"
                        >
                            all
                        </button>
                        <button
                            @click="handleChooseLength"
                            :class="{
                                'text-white bg-red-500':
                                    babyName.length === 'short',
                            }"
                        >
                            short
                        </button>
                    </div>
                </section>
            </div>
            <div class="mt-8">
                <button
                    @click="showBabyName"
                    class="bg-red-500 py-2 px-14 text-white rounded-3xl text-sm"
                >
                    Find names
                </button>
            </div>
        </section>
        <section class="p-5 flex">
            <name-card
                v-for="{ name, id } in babiesName"
                :key="id"
                :name="name"
                :id="id"
                @remove-baby="removeName"
            />
        </section>
    </main>
</template>
