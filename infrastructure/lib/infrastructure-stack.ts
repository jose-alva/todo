import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const tasksTable = new dynamodb.Table(this, 'Tasks', {
      tableName: 'Tasks',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'createdAt', type: dynamodb.AttributeType.NUMBER }, // Optional, if you need a sort key
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Change to RETAIN for production
    });

    tasksTable.addGlobalSecondaryIndex({
      indexName: 'StatusIndex',
      partitionKey: { name: 'status', type: dynamodb.AttributeType.STRING },
    });

    tasksTable.addGlobalSecondaryIndex({
      indexName: 'CreatedAtIndex',
      partitionKey: { name: 'createdAt', type: dynamodb.AttributeType.NUMBER },
    });

    new cdk.CfnOutput(this, 'TasksTableName', {
      value: tasksTable.tableName,
    });
  }
}
