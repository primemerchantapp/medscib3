export interface Note {
  id: string;
  title: string;
  content: string;
  date: Date;
  patientName: string;
  category: string;
  insuranceDetails?: {
    provider: string;
    policyNumber: string;
    billingCode: string;
    amount: number;
  };
}