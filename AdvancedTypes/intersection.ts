type file = {
    name: string;
    size: number;
    type: string;
};

type databaseRecord = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
};

type status = "active" | "inactive" | "pending";

type accessedFileData = file & status;
type accessedDatabaseRecord = databaseRecord & status;




interface iFile {
    name: string;
    size: number;
    type: string;
}

interface iDatabaseRecord {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

interface iStatus {
    status: "active" | "inactive" | "pending";
}

interface iAccessedFileData extends iFile, iStatus { }
interface iAccessedDatabaseRecord extends iDatabaseRecord, iStatus { }
