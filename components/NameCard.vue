<script lang="ts" setup>
const emit = defineEmits<{
    (e: 'removeBaby', id: number): void;
}>();
// const emit = defineEmits(['removeBaby']);
interface props {
    name: string;
    id: number;
}
const props = defineProps<props>();
const removeCard = (id: number) => {
    emit('removeBaby', id);
    // alert(id);
};
</script>
<template>
    <div class="p-3 flex-grow flex-wrap">
        <div class="bg-cyan-600 text-white p-3 rounded-xl">
            <button
                class="text-right w-4 ml-auto block mb-3"
                @click="removeCard(id)"
            >
                x
            </button>
            <div class="text-center font-semibold pb-4">
                {{ name }}
            </div>
        </div>
    </div>
</template>
