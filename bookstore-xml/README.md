# 📚 Bookstore XML Validation Project

## 📌 Description

This project demonstrates XML validation using both **DTD** and **XSD**.

## 📂 Files Included

* `bookstore.dtd` → Defines structure using DTD
* `bookstore.xsd` → Defines structure + data types using XSD
* `bookstore_dtd.xml` → XML validated with DTD
* `bookstore_xsd.xml` → XML validated with XSD

## ✅ Validation

* DTD validates structure only
* XSD validates structure + data types

## 🧪 Testing

Invalid value example:

```xml
<price>abc</price>
```

* DTD → No error
* XSD → Error (expects integer)

## 🛠 Tools Used

* Visual Studio Code
* XML (Red Hat Extension)

## 👨‍💻 Author

Mohammed Junaid
