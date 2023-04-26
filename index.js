export function useChildren(props, index = 0) {
    const children = !Array.isArray(props.children)
        ? props.children
        : props.children[index]
    return children
}

export function useComponent(props, index = 0) {
    const children = useChildren(props, index)
    const element = children.props.children
    return (subs) => {
        console.log(subs)
        element.props = subs
        //element.props = { ...element.props, subs }
        return cloneElement(children, subs)
    }
}
