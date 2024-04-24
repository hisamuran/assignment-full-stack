import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { ProcurementRecord } from "./Api";
import ProcurementRecordPreviewModal from "./ProcurementRecordPreview";

type Props = {
  records: ProcurementRecord[];
};

function RecordsTable(props: Props) {
  const { records } = props;
  const [previewedRecord, setPreviewedRecord] = React.useState<
    ProcurementRecord | undefined
  >();

  let today:Date = new Date();
  let closedDateString = "";
  const columns = React.useMemo<ColumnType<ProcurementRecord>[]>(() => {
    return [
      {
        title: "Published",
        render: (record: ProcurementRecord) =>
          new Date(record.publishDate).toLocaleDateString(),
      },
      {
        title: "Title",
        render: (record: ProcurementRecord) => {
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            setPreviewedRecord(record);
          };
          return (
            <a href="#" onClick={handleClick}>
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Buyer name",
        render: (record: ProcurementRecord) => record.buyer.name,
      },
      {
        title: "Value",
        render: (record: ProcurementRecord) => record.value,
      },
      {
        title: "Currency",
        render: (record: ProcurementRecord) => record.currency,
      },
      {
        title: "Stage",
        render: (record: ProcurementRecord) => {
          if (record.stage == "TENDER") {
            if (record.closed_date == null) {
              closedDateString = "Open";  
            } else if (new Date(record.closed_date) > today) {
              closedDateString = "Open until " + new Date(record.closed_date).toLocaleDateString();
            } else {
              closedDateString = "Closed";
            }
            return (
              <p>
                {closedDateString}
              </p>
            );
          } else if (record.stage == "CONTRACT") {
            return (
              <p>
                Awarded on {new Date(record.award_date).toLocaleDateString()}
              </p>
            );  
          }          
        },
      },
    ];
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={records} pagination={false} />
      <ProcurementRecordPreviewModal
        record={previewedRecord}
        onClose={() => setPreviewedRecord(undefined)}
      />
    </>
  );
}

export default RecordsTable;
