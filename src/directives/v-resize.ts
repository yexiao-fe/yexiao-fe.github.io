export default {
    mounted(el:Element, binding: any) {
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            const { width } = entry.contentRect;
            binding.value(width);
        });
        observer?.observe(el);
        binding.observer = observer
    },
    unmounted(el:Element, binding: any) {
        binding?.observer?.unobserve(el);
    },
}