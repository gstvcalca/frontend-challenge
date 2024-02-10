export function FormatPrice(price_in_cents: number){
    const price_in_reais = Math.floor(price_in_cents / 100);
    return price_in_reais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}