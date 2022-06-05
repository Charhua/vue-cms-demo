import { ref } from 'vue';
import PageContent from '@/components/page-content';
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleSubmitClick = (info: any) => {
    pageContentRef.value?.getPageData(info);
  };
  return {
    pageContentRef,
    handleResetClick,
    handleSubmitClick
  };
}
