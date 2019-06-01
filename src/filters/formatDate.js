export default function FormatDate(value) {
    if (value instanceof Date)
        return value.toLocaleDateString()
    return value.toDate().toLocaleDateString()
}