export type RecordSearchRequest = {
  textSearch?: string;
  offset: number;
  limit: number;
};

export type BuyerDto = {
  id: string;
  name: string;
};

export type ProcurementRecordDto = {
  id: string;
  title: string;
  description: string;
  buyer: BuyerDto;
  publishDate: string;
  value: number;
  currency: string;
  stage: string;
  award_date: string;
  closed_date: string;
};

export type RecordSearchResponse = {
  records: ProcurementRecordDto[];
  endOfResults: boolean; // this is true when there are no more results to search
};
