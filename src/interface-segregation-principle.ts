// Interface para um serviço de pagamento
interface PaymentService {
  processPayment(amount: number): void;
}

// Implementação do serviço de pagamento com cartão de crédito
class CreditCardPaymentService implements PaymentService {
  processPayment(amount: number): void {
    // Lógica para processar o pagamento com cartão de crédito
    console.log(`Processando pagamento de R$${amount} com cartão de crédito...`);
  }
}

// Implementação do serviço de pagamento com boleto bancário
class BoletoPaymentService implements PaymentService {
  processPayment(amount: number): void {
    // Lógica para processar o pagamento com boleto bancário
    console.log(`Processando pagamento de R$${amount} com boleto bancário...`);
  }
}

// Classe que realiza uma compra
class Purchase {
  private paymentService: PaymentService;

  constructor(paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  processPurchase(amount: number): void {
    // Lógica para processar a compra
    console.log(`Processando compra de R$${amount}...`);
    this.paymentService.processPayment(amount);
    console.log('Compra concluída!');
  }
}

// Exemplo de uso
const creditCardPaymentService = new CreditCardPaymentService();
const purchaseWithCreditCard = new Purchase(creditCardPaymentService);
purchaseWithCreditCard.processPurchase(100);

const boletoPaymentService = new BoletoPaymentService();
const purchaseWithBoleto = new Purchase(boletoPaymentService);
purchaseWithBoleto.processPurchase(200);