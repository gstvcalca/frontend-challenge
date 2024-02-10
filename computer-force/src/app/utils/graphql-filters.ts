import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";

export function GetGraphqlCategory (type: FilterType){
    if (type === FilterType.MUG) return "mugs"
    if (type === FilterType.SHIRT) return "t-shirts"
}

export function GetGraphqlSortField (priority: PriorityType){
    if (priority === PriorityType.BIGGEST) return "price_in_cents"
    if (priority === PriorityType.SMALLEST) return "price_in_cents"
    if (priority === PriorityType.POPULARITY) return "sales"
    if (priority === PriorityType.NEWS) return "created_at"
}

export function GetGraphqlSortOrder (priority: PriorityType){
    if (priority === PriorityType.BIGGEST) return "DSC"
    if (priority === PriorityType.SMALLEST) return "ASC"
    if (priority === PriorityType.POPULARITY) return "DSC"
    if (priority === PriorityType.NEWS) return "ASC"
}

export function mountQuery(type: FilterType, priority: PriorityType){
    const filterCategory = GetGraphqlCategory(type);

    return `query {
            allProducts (
            sortField: "${GetGraphqlSortField(priority)}",
            sortOrder: "${GetGraphqlSortOrder(priority)}", 
            ${filterCategory ? 'filter: {category: "' + filterCategory + '"}' : ''}) {
                id,
                name,
                price_in_cents,
                image_url
        }
    }`
}
