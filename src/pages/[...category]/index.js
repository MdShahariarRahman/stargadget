import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";

export default function CategoryPage() {
  return <div>CategoryPage</div>;
}

CategoryPage.getLayout = function getLayout(page) {
  const demoBreadcrumbItems = [
    {
      title: "Category Title",
      path: "categoryPath",
    },
    {
      title: "Brand Title",
      path: "brandPath",
    },
    {
      title: "Product Title",
      path: "productPath",
    },
  ];

  const content = {
    buttons: [
      {
        navLabel: "Brand Label",
        navPath: "brand-label",
      },
      {
        navLabel: "Brand Label",
        navPath: "brand-label",
      },
    ],
    title: "Test Title",
    description: "Test Description",
  };

  return (
    <RootLayout>
      <BreadcrumbLayout
        container
        content={content}
        navItems={demoBreadcrumbItems}
      >
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};
