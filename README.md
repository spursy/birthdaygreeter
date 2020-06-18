# birthdaygreeter

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


### TEST


```
docker run -d -p 8080:7001 spursyy/egg-birthday-greeter:latest

curl -H "Content-Type:application/json" -X POST -d  '{"birth_day": "20210321"}'  http://127.0.0.1:8080/labour
```

```
kubectl apply -f deployment.yaml
kubectl cluster-info
curl -H "Content-Type:application/json" -X POST -d  '{"birth_day": "20210321"}'  cluster-info-host:32000/labour
```

```
docker run -d -v $(pwd)/envoy.yaml:/envoy-config/envoy.yaml -p 80:80 -p 8081:8081 envoyproxy/envoy-alpine -c /envoy-config/envoy.yaml

curl -H "Content-Type:application/json" -X POST -d  '{"birth_day": "20210321"}' localhost/labour
```

```
// Create K8S Resource
kubectl apply -f envoy-2.yaml
kubectl apply -f deployment-2.yaml

// 
minikube tunnel

curl -H "Content-Type:application/json" -X POST -d  '{"birth_day": "20210321"}'  external_ip_address/labour
```


```
minikube ip
kubectl patch svc <svc-name> -n <namespace> -p '{"spec": {"type": "LoadBalancer", "externalIPs":["minikube_ip_address"]}}'

kubectl expose deployment hello-minikube1 --type=LoadBalancer --port=8080
```

- [using-minikube-tunnel](https://minikube.sigs.k8s.io/docs/handbook/accessing/#using-minikube-tunnel)
- [kubernetes service external ip pending](https://stackoverflow.com/questions/44110876/kubernetes-service-external-ip-pending)
  