export default {
    mounted(el:Element, binding: any) {
        console.log(123,el)
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            const { width } = entry.contentRect;
            binding.value(width);
        });
        observer.observe(el);
        binding.observer = observer
    },
    unmounted(el:Element, binding: any) {
        console.log(binding)
        binding.observer.unobserve(el);
    },
}