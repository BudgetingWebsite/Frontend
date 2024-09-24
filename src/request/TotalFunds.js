export default function TotalFunds(buckets) {
    var total = 0;
    for (const bucket of buckets) {
        total += bucket["amount"];
    }
    return total;
}
