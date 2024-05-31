export function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDecscriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDecscriptor;
}
//# sourceMappingURL=autobind.js.map