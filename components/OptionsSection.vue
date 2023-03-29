<script setup lang="ts">
import { BabySex, NameLength, NameType } from '@/config/enums';

const props = defineProps<{
    babyName: { sex: string; type: string; length: string };
    options: {
        id: number;
        category: string;
        title: string;
        buttons: BabySex[] | NameLength[] | NameType[];
    };
}>();
</script>
<template>
    <div class="my-4">
        <section>
            <div class="mb-4 font-medium">{{ options.title }}</div>
            <div
                class="rounded-3xl border-[3px] border-red-500 overflow-hidden [&_button]:capitalize [&_button]:border-red-500 [&_button]:py-3 [&_button]:px-7 [&_button]:text-xs [&_button]:font-medium w-fit bg-white"
            >
                <button
                    v-for="val in options.buttons"
                    :key="val"
                    @click="babyName[options.category] = val"
                    :class="{
                        'text-white bg-red-500':
                            babyName[options.category] === val,
                    }"
                >
                    {{ val }}
                </button>
            </div>
        </section>
    </div>
</template>
