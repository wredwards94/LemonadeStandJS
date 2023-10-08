console.log('Running Module B')

export const moduleBvariable = 'Named Variable from Module B'

export const moduleBvariable2 = 50

export function moduleBFunction() {
    console.log('Running Module B')
}

export default {
    a: moduleBvariable,
    b: moduleBvariable2,
    c: moduleBFunction
}

console.log('Finished running Module B')