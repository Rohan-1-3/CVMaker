const yearArr = [];
const currentYear = new Date().getFullYear();
for (let i = 0; i < 100; i++) {
    yearArr.push(currentYear - i)
}     
const yearSelect = yearArr.map(x =>(<option key={x} value={x}>{x}</option>))

export default yearSelect