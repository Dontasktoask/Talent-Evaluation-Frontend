#!/usr/bin/env bash
#set -x
main(){
  if [ $DEPLOY_TO_ECS == false ]; then
    echo "No need to deploy into S3"; exit 0;
  fi

  echo "Deploy build artifacts to S3"
  if [ -z $1 ]; then
    echo "Deploy requires environment name (dev,qa,stage)"; exit 1;
  fi

  if [ $1 == "dev" ] || [ $1 == "qa" ] || [ $1 == "stage" ] || [ $1 == "prod" ]; then
    AWS_S3_BUCKET_NAME=$AWS_S3_DEPLOY_BUCKET_NAME
  else
    echo "Undefined environment:$1"; exit 1; 
  fi
  
  #if [[ -z "$STUDIO_CI_SHORT_COMMIT_HASH" ]]; then 
  #  echo "Error: For environment $1, commit(${STUDIO_CI_SHORT_COMMIT_HASH}) required" ; exit 1; 
  #fi
  #echo "Skipping deploy for testing"; exit 0;
 
  echo "Sync to s3://$AWS_S3_BUCKET_NAME with build:${STUDIO_CI_SHORT_COMMIT_HASH}"
  aws s3 sync ~/app/build/build s3://$AWS_S3_BUCKET_NAME --delete
  if [ $? -eq 1 ]; then
    echo "Error pushing build to $AWS_S3_BUCKET_NAME"; exit 1; 
  fi
}

main "$@"
