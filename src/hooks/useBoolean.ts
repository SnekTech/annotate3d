import { useState } from "react";

export function useBoolean(initialValue = false) {
    const [bool, setBool] = useState(initialValue)

    function toggle() {
        setBool(value => !value)
    }

    return [bool, setBool, toggle] as [boolean, typeof setBool, typeof toggle]
}

export function useToggle(initialValue = false) {
    const [bool, , toggle] = useBoolean(initialValue)

    return [bool, toggle] as [boolean, typeof toggle]
}