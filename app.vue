<script setup lang="ts">
import { IBabyName, IButtonEvent, IBabiesName } from '@/config/types';
import { BabySex, NameLength, NameType } from '@/config/enums';
import { names } from '@/config/data';
import { babyNameItem } from '@/config/optionSectionData';
const babyName = reactive<IBabyName>({
    sex: BabySex.BOY,
    type: NameType.TRENDY,
    length: NameLength.ALL,
});
// set a interface for event
const babiesName = ref<IBabiesName[]>([]);
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
            <options-section
                v-for="{ id, ...item } in babyNameItem"
                :key="id"
                :options="{ id, ...item }"
                :baby-name="babyName"
            />
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
