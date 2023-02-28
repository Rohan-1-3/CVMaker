export default function DisableButtons(){
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => button.disabled = true)
}

export function EnableButtons(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = false)
}