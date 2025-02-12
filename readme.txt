passo a passo para configuração do TYPEORM e demais coisas
- no manual não achei muito claro como deveria ser feita a organização dos diretórios e arquivos.
- criei a estrutura de pastas da seguinte forma
    - MYAPP pasta raiz
        -SRC contém todos os arquivos da API
            -CONFIG na pasta config eu coloquei os arquivos de comunicação do BD > nessa pasta você configura qual banco irá utilizar
            usuário e senha do banco, nome do banco, porta que o banco vai rodar e as entidades do banco
            - CONTROLLERS vai ser a pasta responsável em fazer as requisições HTTP > GET, POST, PUT, PATCH, and DELETE 
            - ENTITIES vai ser a pasta que vai alocar nossas entidades do BD
            - MIGRATIONS - vai utilizadas para fazer mudanças no banco
            - SCRIPTS - pasta utilizada para realizar alguns testes
            - SERVICES - local onde ficam as regras de negócio

configurado todo o diretório de pastas você deverá acessar o site da TYPEORM e seguir o passo a passo de configuração
- https://typeorm.io/

alguns comandos úteis para utilizar no terminal
- npx ts-node src/scripts/scripts.ts > utilizei para subir o banco e testar seu funcionamento, ainda não havia feito os controllers, mas inseri os dados direto via banco
para ver se o autocomplete da id iria funcionar como o esperado
-