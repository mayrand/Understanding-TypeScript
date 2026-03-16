# Understanding-TypeScript

tsc --init // tworzy plik z domyślną konfiguracją tsconfig.json
tsc // kompiluje wszystkie pliki z roota konfiguracji - domyślnie ten sam katalog co tsconfig
npm install --save-dev @types/node// typy dla użycia node, trzeba instalować dla każdej zewnętrznej biblioteki cała lista: https://github.com/DefinitelyTyped/DefinitelyTyped, save-dev powoduje że nie wypluwa do outputu przy publikacji