// Bad Example: Adding new discount types by modifying existing code.
class Discountt {
    getDiscount(discountType: string): number {
        
        if(discountType === 'seasonal') return 10;
        if(discountType === 'festival') return 20;

        return 0;
    }
}
// Adding a new discount type (e.g., "clearance") requires modifying the getDiscount method. This violates OCP.


// Good Example: Using inheritance or interfaces to extend behavior.
interface Discount {
    calculate(): number;
}

class SeasonalDiscount implements Discount {
    calculate(): number {
        return 10;
    }
}

class FestivalDiscount implements Discount {
    calculate(): number {
        return 20;
    }
}

class ClearanceDiscount implements Discount {
    calculate(): number {
        return 50;
    }
}


const discounts: Discount[] =  [new SeasonalDiscount(), new FestivalDiscount, new ClearanceDiscount];

discounts.forEach((discounts) => console.log(discounts.calculate()))



export {}