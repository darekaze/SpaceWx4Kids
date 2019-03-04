import { shallowMount } from '@vue/test-utils';
import HelloI18n from '@/components/HelloI18n.vue';

describe('HelloI18n.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloI18n, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
